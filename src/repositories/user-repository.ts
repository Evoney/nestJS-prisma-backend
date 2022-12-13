export abstract class UserRepository {
  abstract create(name: string, userFunction: string): Promise<void>;
  abstract update(id: string, name: string, userFunction: string): Promise<void>;
  abstract delete(id: string): Promise<void>;
}