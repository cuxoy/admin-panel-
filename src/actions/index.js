export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDeleted = (id) =>{
    return{
        type: 'HERO_DELETE',
        payload: id
    }
}

export const heroAdded = (newHero) =>{
    return{
        type: 'HERO_ADD',
        payload: newHero
    }
}