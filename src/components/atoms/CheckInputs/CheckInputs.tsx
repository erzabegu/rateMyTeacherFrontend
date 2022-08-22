import { Form, FormCheckProps } from 'react-bootstrap'

interface Props extends FormCheckProps {
    options?: Array<any>;
}

const CheckInputs = (props: Props) => {
    return <Form>
        {props.options && props.options.map((option) => <Form.Check
            {...props}
            label={option.label}
            name={option.name}
            id={option.name}
            type={'radio'}
        />
        )}
    </Form>

    // qitu munesh me shti input type checkbox ose radio

}

export default CheckInputs