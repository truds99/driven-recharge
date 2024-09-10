import { Recharge, RechargeData } from "../protocols/protocols";
import db from "../database";

export async function postRechargeRep(rechageData: RechargeData) {
    const { phone_id, value } = rechageData;

    const result = await db.query<Recharge>(`
        INSERT INTO recharges (phone_id, value)
        VALUES ($1, $2)
        RETURNING *;
    `, [phone_id, value]);

    return result;
}