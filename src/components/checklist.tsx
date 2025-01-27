import React, { useReducer } from 'react';
import styles from '../styles/checklist.module.css';

type TypeActionData = {
  type: 'checked';
  id: number;
  checked: boolean;
};

interface ChecklistData {
  id: number;
  checked: boolean;
  value: string;
}

function checklistReducer(checklist: ChecklistData[], action: TypeActionData) {
  switch (action.type) {
    case 'checked': {
      return checklist.map((checkbox) => {
        if (checkbox.id === action.id) {
          return {
            ...checkbox,
            id: action.id,
            checked: action.checked,
          };
        }
        return checkbox;
      });
    }

    default: {
      throw Error('Unknown action');
    }
  }
}

const checklistInitialValues: ChecklistData[] = [
  {
    id: 1,
    checked: false,
    value: 'Korean',
  },
  {
    id: 2,
    checked: false,
    value: 'English',
  },
  {
    id: 3,
    checked: false,
    value: 'Japanese',
  },
];

export default function Checklist() {
  const [checklist, dispatch] = useReducer(
    checklistReducer,
    checklistInitialValues,
  );

  return (
    <div>
      <div className="demo-category-title">
        Checklist
      </div>
      <div className="demo-category">
        <div>
          What languages can you speak?
        </div>
        <br />
        <div>
          {checklist.map((checkbox) => (
            <label
              key={checkbox.id}
              htmlFor={`checkbox-${checkbox.id}`}
              className={styles.checkboxLabel}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                id={`checkbox-${checkbox.id}`}
                value={checkbox.value}
                checked={checkbox.checked}
                onChange={(e) => dispatch({
                  type: 'checked',
                  id: checkbox.id,
                  checked: e.target.checked,
                })}
              />
              {checkbox.value}
            </label>
          ))}
        </div>
        <br />
        <div>
          Selected:
          {' '}
          {checklist.map((checkbox) => {
            if (checkbox.checked) {
              return (
                <span key={checkbox.id} className={styles.selectedChecklist}>
                  {checkbox.value}
                </span>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
