export interface InputProps {
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options?:{label:string, value:string}[]
}