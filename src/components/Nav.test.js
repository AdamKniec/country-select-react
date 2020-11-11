import React from 'react';
import {render} from '@testing-library/react';
import Nav from './Nav';

describe('Navbar renders correctly', ()=> {
    it('renders correctly', ()=> {
        const {queryByTestId} = render(<Nav/>)
        expect(queryByTestId('navbar-panel')).toBeTruthy();
    })
});
