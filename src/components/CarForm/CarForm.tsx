import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseColor, chooseMake, chooseModel, chooseYear } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    color: string;
    make: string;
    model: string;
    year: string;
}

export const CarForm = (props:CarFormProps) => {
    
    const dispatch = useDispatch();
    const store = useStore();
    const model = useSelector<CarState>(state => state.model);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        // the ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseColor(data.color));
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='make'>Make</label>
                    <Input {...register('make')} name="make" placeholder="Make" />
                </div>
                <div>
                    <label htmlFor='model'>Model</label>
                    <Input {...register('model')} name="model" placeholder="Model" />
                </div>
                <div>
                    <label htmlFor='year'>Year</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
                </div>
                <div>
                    <label htmlFor='color'>Color</label>
                    <Input {...register('color')} name="color" placeholder="Color" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
        )
}