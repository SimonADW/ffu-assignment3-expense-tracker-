// import groceries from "../../assets/groceries.svg"
// import clothing from "../../assets/clothing.svg"
// import transportation from "../../assets/transportation.svg"
// import housing from "../../assets/housing.svg"
// import other from "../../assets/other.svg"
// import trash from "../../assets/trash.svg"

import styles from "./ListItem.module.css"



export default function ListItem({currentItem, deleteExpense}) {

  return (
    <>
          {/* LEFT SECTION OF ITEM */}
      <li className={styles.listItem} data-id={currentItem.id} >
        <span className="liLeft">
          <span className="li__icon">
		        <img className={styles.categoryIcon} src={`${currentItem.category}.svg`} alt="" />	
          </span>

          <span className="li__date">{currentItem.date}</span>

          <span className="li__title">{currentItem.title}</span>
        </span>

         {/* RIGHT SECTION OF ITEM */}
        <span>
          <span>{currentItem.amount},-</span>

          <span>
            <button className={styles.deleteButton} onClick={deleteExpense} >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="">
                  <path d="M5.83334 3.33333C5.83334 2.89131 6.00893 2.46738 6.32149 2.15482C6.63405 1.84226 7.05798 1.66667 7.5 1.66667H12.5C12.942 1.66667 13.366 1.84226 13.6785 2.15482C13.9911 2.46738 14.1667 2.89131 14.1667 3.33333V5H17.5C17.721 5 17.933 5.0878 18.0893 5.24408C18.2455 5.40036 18.3333 5.61232 18.3333 5.83333C18.3333 6.05435 18.2455 6.26631 18.0893 6.42259C17.933 6.57887 17.721 6.66667 17.5 6.66667H16.6092L15.8867 16.785C15.8567 17.2055 15.6686 17.599 15.3601 17.8863C15.0516 18.1736 14.6457 18.3333 14.2242 18.3333H5.775C5.35345 18.3333 4.94756 18.1736 4.63908 17.8863C4.33059 17.599 4.14244 17.2055 4.1125 16.785L3.39167 6.66667H2.50001C2.27899 6.66667 2.06703 6.57887 1.91075 6.42259C1.75447 6.26631 1.66667 6.05435 1.66667 5.83333C1.66667 5.61232 1.75447 5.40036 1.91075 5.24408C2.06703 5.0878 2.27899 5 2.50001 5H5.83334V3.33333ZM7.5 5H12.5V3.33333H7.5V5ZM5.06167 6.66667L5.77584 16.6667H14.225L14.9392 6.66667H5.06167ZM8.33334 8.33333C8.55435 8.33333 8.76631 8.42113 8.92259 8.57741C9.07887 8.73369 9.16667 8.94565 9.16667 9.16667V14.1667C9.16667 14.3877 9.07887 14.5996 8.92259 14.7559C8.76631 14.9122 8.55435 15 8.33334 15C8.11232 15 7.90036 14.9122 7.74408 14.7559C7.5878 14.5996 7.5 14.3877 7.5 14.1667V9.16667C7.5 8.94565 7.5878 8.73369 7.74408 8.57741C7.90036 8.42113 8.11232 8.33333 8.33334 8.33333ZM11.6667 8.33333C11.8877 8.33333 12.0996 8.42113 12.2559 8.57741C12.4122 8.73369 12.5 8.94565 12.5 9.16667V14.1667C12.5 14.3877 12.4122 14.5996 12.2559 14.7559C12.0996 14.9122 11.8877 15 11.6667 15C11.4457 15 11.2337 14.9122 11.0774 14.7559C10.9211 14.5996 10.8333 14.3877 10.8333 14.1667V9.16667C10.8333 8.94565 10.9211 8.73369 11.0774 8.57741C11.2337 8.42113 11.4457 8.33333 11.6667 8.33333Z" fill="black"/>
              </svg>
			      </button>
          </span>
        </span>
      </li>
    </>
  );
}
