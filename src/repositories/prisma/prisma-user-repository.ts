import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/database/prisma.service";
import { UserRepository } from "../user-repository";

@Injectable()
export class PrismaUserRepository implements UserRepository {

  constructor(
    private prisma: PrismaService
  ) {}
  
  async create(name: string, userFunction: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        function: userFunction
      }
    }) 
  }

  async update(id: string, name: string, userFunction: string): Promise<void> {
    await this.prisma.user.update({
      data: {
        name,
        function: userFunction
      },
      where: {
        id
      }
    }) 
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id
      }
    }) 
  }
}