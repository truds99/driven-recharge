import { Customer } from "../protocols/protocols";
import db from "../database";

export async function getCustomerRep(document: string) {
    const customer = await db.query<Customer>(`
        SELECT * FROM customers
        WHERE document = $1;
    `, [document]);

    return customer;
}

export async function postCustomerRep(name: string, document: string) {
    await db.query(`
        INSERT INTO customers (name, document)
        VALUES ($1, $2)
    `, [name, document]);
}