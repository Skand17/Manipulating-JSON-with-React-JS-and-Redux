import React from 'react';
import Select from 'react-select';

const CustomSelectComponent = ({

    field: {...fields},
    field,
    form: {touched, errors},
    ...props
  }) => (
    <div>
      <Select
          defaultValue={props.defaultValue}          
          value={props.value}
          options={props.options}          
          name={fields.name}
          onChange={props.onChange}
          invalid={Boolean(touched[fields.name] && errors[fields.name])}
      />
    
      {touched[fields.name] && errors[fields.name] ? <div className="error-message"><label className="c-pink">{errors[fields.name]}</label></div> : ''}
    </div>
  );

  export default CustomSelectComponent;
