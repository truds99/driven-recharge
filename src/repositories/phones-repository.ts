import db from "../database";

export async function postPhoneRep(document, number, carrier_id, description) {
    await db.query(`
        INSERT INTO phones (customer_document, number, carrier_id, description)
        VALUES ($1, $2, $3, $4);
    `, [document, number, carrier_id, description]);
}

export async function getPhonesByDocumentRep(document) {
    const phones = await db.query(`
        SELECT * FROM phones
        WHERE customer_document = $1;
    `, [document]);

    return phones;
}

export async function getPhoneRep(number) {
    const phone = await db.query(`
        SELECT * FROM phones
        WHERE number = $1;
    `, [number]);

    return phone;
}

