import { Recharge, RechargeData } from "../protocols/protocols";
import db from "../database";
import { invalidParametersError } from "../errors/errors";

export async function postRechargeRep(rechageData: RechargeData) {
    const { phone_id, value } = rechageData;

    const result = await db.query<Recharge>(`
        INSERT INTO recharges (phone_id, value)
        VALUES ($1, $2)
        RETURNING *;
    `, [phone_id, value]);

    return result;
}

export async function getRechargesBySomethingRep(column: string, value: number) {
    const allowedColumns = ['phone_id', 'value']

    if (!allowedColumns.includes(column)) throw invalidParametersError();
        
    const items = await db.query<Recharge[]>(`
        SELECT * FROM recharges
        WHERE ${column} = $1;
    `, [value]);

    return items.rows;
}