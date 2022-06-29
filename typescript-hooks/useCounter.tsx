import { useState } from "react";

const useCounter = (valorInicial: number = 10) => {
    const [contador, setContador] = useState<number>(valorInicial);

    const acumular = (numero: number) => {
        setContador(contador + numero);
    }


    return {
        contador,
        acumular
    }
}

export default useCounter