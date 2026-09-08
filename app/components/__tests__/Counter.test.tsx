import {render, screen, fireEvent} from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import Counter from '../Counter';


describe ('Counter componnet(Integration test)' , ( ) => {

    it('updates the state of button click', () => {
        render(<Counter/>);
        const countDisplay = screen.getByTestId('count-display');
        const button = screen.getByRole('button', {name : /increment/i});

        expect(countDisplay).toHaveTextContent('Count: 0');
        fireEvent.click(button);
        expect(countDisplay).toHaveTextContent('Count: 1')
    } )


})