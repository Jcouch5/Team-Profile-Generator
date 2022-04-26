const generateEmployees = (data) => {
    const cards = [];
    data.forEach(employee => {
       if (employee.getRole() === 'Manager'){
        const managerCard = `
        <div class="card text-center">
            <div class="card-header">
            <h1>${employee.getName()} <h1>
                 ${employee.getRole()}
            </div>
            <div class="card-body">
                <p>id: ${employee.getId()} </p>
                <p>Email: <a href="mailto:${employee.getEmail()}" >${employee.getEmail()}</a></p>
                <p> Office Number: ${employee.getOfficeNumber()}
            </div>
        </div>
        `;
        cards.push(managerCard)
       } else if (employee.getRole() === 'Engineer') {
        const EngineerCard = `
        <div class="card text-center">
            <div class="card-header">
                 <h1>${employee.getName()} <h1>
                 ${employee.getRole()}
                 
            </div>
            <div class="card-body">
                <p>id: ${employee.getId()} </p>
                 <p>Email: <a href="mailto:${employee.getEmail()}" >${employee.getEmail()}</a></p>
               <p>GitHub: <a href="#https://github.com/${employee.getGitHub()}" class="btn btn-primary">${employee.getGitHub()}</a> </p>
            </div>
        </div>
        `;
        cards.push(EngineerCard)
       } else {
        const InternCard = `
        <div class="card text-center">
            <div class="card-header">
            <h1>${employee.getName()} <h1>
                 ${employee.getRole()}
            </div>
            <div class="card-body">
                 <p>id: ${employee.getId()} </p>
                 <p>Email: <a href="mailto:${employee.getEmail()}" >${employee.getEmail()}</a></p>
                 <p>School: ${employee.getSchool()} </p>
            </div>
        </div>
        `;
        cards.push(InternCard)
       }
    });
    return cards.join('');
}
module.exports  = (data) => {
const template =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <nav class='navbar bg-primary text-center'>
            <h1> My Team  </h1>
        </nav>
    </header>
    <div class='container'>
        ${generateEmployees(data)}
    </div>
</body>
</html>`;
return template;

}