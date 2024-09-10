import { Phone, PhoneData } from "../protocols/protocols";
import db from "../database";
import { invalidColumnError } from "../errors/errors";

export async function postPhoneRep(phoneData: PhoneData) {
    const { customer_document, number, carrier_id, description } = phoneData;

    const result = await db.query<Phone>(`
        INSERT INTO phones (customer_document, number, carrier_id, description)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `, [customer_document, number, carrier_id, description]);

    return result;
}

export async function getPhonesBySomethingRep(column: string, value: string | number) {

    const allowedColumns = ['id', 'number', 'carrier_id', 'description', 'customer_document'];
    if (!allowedColumns.includes(column)) {
        throw invalidColumnError();
    }

    const phones = await db.query<Phone[]>(`
        SELECT * FROM phones
        WHERE ${column} = $1;
    `, [value]);

    return phones;
}

