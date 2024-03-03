import React from 'react';
import {useGetPokemonByNameQuery} from '@/services/PokemonService'
import {useFetchAllSizesQuery} from '@/services/sizeService'
import {useFetchAllBrandsQuery} from '@/services/brandService'

const Orders = () => {
    const { data: brand } = useFetchAllBrandsQuery();
    const { data: sizes } = useFetchAllSizesQuery();
    const { data: bulbasaur, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    console.log(bulbasaur)
    console.log(sizes)
    return (
        <div>
            <h1>Заказы</h1>
            <p>{!isLoading && bulbasaur.species.name}</p>
        </div>
    );
};

export default Orders;