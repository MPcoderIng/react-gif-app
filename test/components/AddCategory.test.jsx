import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests on <AddCategory />', () => { 
    test('should change Text Box value', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value: 'Saitama'}});

        expect( input.value ).toBe('Saitama');
        // screen.debug();
        
     });
 });