import { postRechargeRep } from "../repositories/recharges-repository";
import { RechargeData } from "../protocols/protocols";
import { notFoundError } from "../errors/errors";
import { getPhonesBySomethingRep } from "../repositories/phones-repository";

export async function postRechargeService(rechargeData: RechargeData){

    const { phone_id } = rechargeData;

    const thisPhoneExist = !!(await getPhonesBySomethingRep('id', phone_id)).rows
    if (!thisPhoneExist) throw notFoundError('phone');

    const register = await postRechargeRep(rechargeData);
    return register;
}
