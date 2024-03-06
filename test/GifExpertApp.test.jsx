import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 
    test('should first', () => { 
        render(<GifExpertApp/>);
        // expect(screen.findAllByRole('value')).toBe('');
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('');
        
     });

     test('should second', () => { 
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        input.value = "ABC"
        expect(input.value).toBe('ABC');
        screen.debug();
      });
 });