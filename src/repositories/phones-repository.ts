import db from "../database";

export async function postPhoneRep(document, number, carrier_id, description) {
    await db.query(`
        INSERT INTO customers (document)
        VALUES ($1);
    `, [document]);

    await db.query(`
        INSERT INTO phones (customer_document, number, carrier_id, description)
        VALUES ($1, $2, $3, $4);
    `, [document, number, carrier_id, description]);
}