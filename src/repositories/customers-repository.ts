import db from "../database";

export async function getCustomerRep(document) {
    const customer = await db.query(`
        SELECT * FROM customers
        WHERE document = $1;
    `, [document]);

    return customer;
}

export async function postCustomerRep(name, document) {
    const customer = await db.query(`
        INSERT INTO customers (name, document)
        VALUES ($1, $2)
    `, [name, document]);
}