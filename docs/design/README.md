
  
@startuml


entity "Task" as task {
  +id: int
  --
  name: string
  deadline: datatime
}

entity "Client" as client {
  +id: int
  --
  name: string
  name: string
  mail: string
  password: string
}

entity "Role" as role {
  +id: int
  --
  name: string
  permission: string
  description: string
}

entity "Request" as request {
  +id: int
  --
  name: string
  time: datatime
  description: string
}

request "0,*"--"1,1" client
task "0,*"--"1,1" client
client "0,*"--"1,1" role

@enduml
