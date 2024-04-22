# Модель прецедентів


## Схема використання для адміністратора


@startuml

actor "Адміністратор" as Admin

usecase "<b>acc_manip</b>\nКерування обліковими\n записами користувачів" as ManipAccount 
usecase "<b>source_manip</b>\nКерування джерелами інформації" as ManipSource 
usecase "<b>req_manager</b>\nКерування запитами користувачів" as ReqManager

usecase "<b>delete_account</b>\nВидалення облікового запису\n користувача" as DeleteAccount
usecase "<b>add_source</b>\nДодавання нового джерела" as AddSource
usecase "<b>add_rights</b>\nНадання додаткових прав\n користувачу" as GrantPermissions
usecase "<b>delete_source</b>\nВидалення джерела" as DeleteSource
usecase "<b>view_req</b>\nПереглянути запит" as ViewReq

Admin --> ManipAccount
DeleteAccount .u.> ManipAccount: <<extends>>
GrantPermissions .u.> ManipAccount: <<extends>>

Admin --> ManipSource
AddSource .u.> ManipSource: <<extends>>
DeleteSource .u.> ManipSource: <<extends>>

Admin --> ReqManager
ViewReq .u.> ReqManager: <<extends>>

@enduml
