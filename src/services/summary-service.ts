import { Summary } from "../protocols/protocols";
import { notFoundError } from "../errors/errors";
import { getCustomerRep } from "../repositories/customers-repository";
import { getPhonesBySomethingRep } from "../repositories/phones-repository";
import { getRechargesBySomethingRep } from "../repositories/recharges-repository";

export async function buildSummary(document: string) {

    if (!(await getCustomerRep(document)).rowCount) throw notFoundError('customer')

    const phoneData = (await getPhonesBySomethingRep('customer_document', document)).rows;

    const phones = await Promise.all(phoneData.map(async (elm) => {
        return {
            number: elm.number,
            description: elm.description,
            carrier: getCarrier(elm.carrier_id),
            recharges: (await getRechargesBySomethingRep('phone_id', elm.id)).map(r => {
                return { id: r.id, value: r.value };
            })
        };
    }));

    const summary: Summary = {
        document,
        phones
    }

    return summary;
}

export function getCarrier(id: number) {
    switch (id) {
        case 1:
          return { name: 'Vivo', code: 15 };
        case 2:
          return { name: 'Tim', code: 41 };
        case 3:
          return { name: 'Oi', code: 31 };
        case 4:
          return { name: 'Claro', code: 21 };
        default:
          return { name: 'Unknown carrier', code: 0 };
      }
}
