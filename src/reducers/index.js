const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETE':
            const newHeroList = state.heroes.filter(item => item.id !== action.payload) 
            return{
               ...state,
               heroes: newHeroList
            }
        case 'HERO_ADD':
           const addHeroList = [...state.heroes, action.payload]
            return{
                ...state,
                heroes: addHeroList
            }
        default: return state
    }
}

export default reducer;