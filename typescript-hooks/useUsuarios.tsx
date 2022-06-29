import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        //Llamado al API
        cargarUsuarios(paginaRef.current);
    }, [])

    const cargarUsuarios = async (pagina: number) => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: pagina
            }
        });

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            alert('No hay mas usuarios');
            paginaRef.current--
        }

    }

    const paginaSiguiente = () => {

        cargarUsuarios(++paginaRef.current)

    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            cargarUsuarios(--paginaRef.current)
        }
    }

    return { usuarios, paginaSiguiente, paginaAnterior }

}

export default useUsuarios