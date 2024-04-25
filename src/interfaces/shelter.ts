export interface IShelter {
    shelterName: string
    shelterEmail: string
    shelterPhone: string
    shelterWhatsapp: string
}

export interface IUpdateShelterRequest {
    name: string
    mail: string
    phone: string
    whatsapp: string
}

export interface IUpdateShelterResponse extends IUpdateShelterRequest {}