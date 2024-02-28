import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('PRUEBAS EN GIF ITEM', () => {
    
    const url = 'https://api.giphy.com/v2/emoji?api_key=PZdk0PbT1xkFEABpKXPfn7lIj1C495MF&limit=10&offset=0';
    const title = 'Titulo';

    test('should receive title and url', () => {
        render(<GifItem title={title} url={url}/>);
    });

    test('should match snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show correct url and alt', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
        // console.log(screen.getByRole('img').src);
        // screen.debug();
     });

     test('should show component title', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
      });
});