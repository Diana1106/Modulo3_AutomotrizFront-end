export interface detalles{
    id?: string;
    personas:personas;
    tareas: tareas;
    
}
export interface personas{
    id?: string;
    nombre: string;
    
}
export interface tareas{
    id?: string;
    tareas: string;
}
export interface detallesG{
    id?: string;
    tareas: number;
    personas: number
}
