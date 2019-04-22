
export async function getUsers() {
  const response = await fetch('https://api.github.com/users?since=135');
  return response.json();
}

export async function getGitHubUserDetail(id){
  const response = await fetch('http://dummy.restapiexample.com/api/v1/employee/'+id);
  return response.json();
}


export async function getGitHubUsers() {
  const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
  return response.json();
}