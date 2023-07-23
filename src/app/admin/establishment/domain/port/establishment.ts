import { Establishment } from "src/app/shared/domain/models/establishment.model";

export interface IEstablishmentService {
    getAllEstablishments(): Establishment[];
    getEstablishmentById(id: number): Establishment | undefined;
    saveEstablishment(establishment: Establishment): void;
    updateEstablishment(establishment: Establishment): void;
    deleteEstablishment(id: number): void;
  }