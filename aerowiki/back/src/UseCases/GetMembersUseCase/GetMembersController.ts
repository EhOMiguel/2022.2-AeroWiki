import { Request, Response } from "express";
import { GetMembersUseCase } from "./GetMembersUseCase";

export class GetMembersController {
  constructor(
    private getMemberUseCase: GetMembersUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const membersList = await this.getMemberUseCase.execute()
      return response.status(200).json(membersList);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'ERRO NO SISTEMA D:'
      })
    }
  }
}