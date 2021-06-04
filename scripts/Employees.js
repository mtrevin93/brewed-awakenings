import { getEmployees, getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees() 


document.addEventListener(
    "click",
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            
            for (const employee of employees) {
                if (employee.id ===parseInt(employeeId)) {
                    window.alert(`${employee.name} has sold ${employee.numOfOrders} products`)
                }
            }
        }
    }
)




export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

