import { option1, option2, option3, option4, option5 } from "../../../constants";
import {InputField} from "../../index";

import "./Form.scss";

const Form = ({className}:{className?:string}) => {
    
 
	return (
		<form action="#" className="form">
			<div className={`form__row ${className}`}>
				<div className="form__column">
             
                <InputField label="Тема" isImportant id="Тема"    className='field' />
					<InputField label="Описание" id="Описание" className='field'/>
					<InputField label="Рабочие заметки" isImportant id="Рабочие заметки"  className='field' />
					<InputField
						label="Ответственный"
                         className='field'
						search
						plus
						id="Ответственный"
						type="search"
                        options={option3}
					/>
				</div>
				<div className="form__column">
					<InputField label="Статус" id="Статус"  className='field'/>
					<InputField
						label="Продукт"
						search
						id="Продукт"
						type="search"
                         className='field'
						 options={option4}
					/>
					<InputField label="Приоритет" id="Приоритет"  className='field' />
					<InputField
						label="Группа"
						search
                         className='field'
						plus
						id="Группа"
						type="search"
						options={option5}
					/>
				</div>
			</div>
			<InputField label="Комментарии" id="Комментарии"  className='field' />
			<InputField
				label="Согласующие"
                className="field-b"
				search
				plus
				id="Согласующие"
				type="search"
                options={option1}
				multiple
			/>
			<div className="form__row">
				<div className="form__column">
					<InputField label="Когда открыто"  className='field' date id="Когда открыто" type="date" />
					<InputField
						label="Кем открыто"
                         className='field'
						search
						plus
						id="Кем открыто"
						type="search"
                        options={option2}
					/>
				</div>
				<div className="form__column">
					<InputField label="Когда создано"  className='field' date id="Когда создано" type="date" />
					<InputField
						label="Кем создано"
                        last
                         className='field'
						search
						plus
						id="Кем создано"
						type="search"
                        options={option2}
					/>
				</div>
			</div>
		</form>
	);
};

export default Form;
