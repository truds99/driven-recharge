import { postRechargeRep } from "../repositories/recharges-repository";
import { RechargeData } from "../protocols/protocols";
import { getPhonesBySomethingRep } from "../repositories/phones-repository";
import { phoneNotFoundError } from "../errors/errors";

export async function postRechargeService(rechargeData: RechargeData){

    const { phone_id } = rechargeData;

    const thisPhoneExist = !!(await getPhonesBySomethingRep('id', phone_id)).rowCount
    if (!thisPhoneExist) throw phoneNotFoundError();

    const register = await postRechargeRep(rechargeData);
    return register;
}
