import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => { 
    
    const category = 'One Punch';

    test('should show loading on start', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     });

     test('should show items when images are loading from useFetchGifs', () => { 
         
         const gifs = [
             {
                 id: '1',
                 title: 'ABC',
                 url: 'http://www.google.com',
             },
             {
                 id: '2',
                 title: 'DEF',
                 url: 'http://www.google.com.mx',
             }
         ]

        useFetchGifs.mockReturnValue({
             images: gifs,
             isLoading: false,
         });

         render(<GifGrid category={category}/>);

         expect( screen.getAllByRole('img').length ).toBe(2);

      });
 });