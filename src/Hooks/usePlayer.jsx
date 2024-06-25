
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePlayer = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allPlayers = [], refetch, isLoading} = useQuery({ 
        queryKey: ['players'],
        queryFn: async() => {
            const res = await axiosPublic.get('/player-list');
            return res.data;
            
        }
        
    })
    
    
    return {allPlayers , refetch,isLoading} ;
};

export default usePlayer;