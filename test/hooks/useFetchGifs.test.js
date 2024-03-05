import { renderHook , waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests on hook useFetchGifs', () => { 
    test('should return initial state', () => { 
        
        const { result } = renderHook( () => useFetchGifs('Superman') );
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    
     });

     test('should return images array and isLoading should be false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('Superman') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    
     });

 });