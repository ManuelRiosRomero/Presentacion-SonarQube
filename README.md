## Instalación de SonarQube mediante Docker
[Documentación de SonarQube](https://docs.sonarqube.org/latest/)

[Instalación en Docker](https://docs.sonarqube.org/latest/setup-and-upgrade/install-the-server/)

[Try out SonarQube](https://docs.sonarqube.org/latest/try-out-sonarqube/)

1. Hacer pull a la imagen oficial de SonarQube
```bash
docker pull sonarqube
```
2. Crear los volumenes necesarios para prevenir la perdida de información al cambiar entre versiones de SonarQube.
```bash
docker volume create --name sonarqube_data
```
```bash
docker volume create --name sonarqube_logs
```
```bash
docker volume create --name sonarqube_extensions
```

## Ejecución del Programa
1.  Ejecuta SonarQube ```bash```
```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```
2. Abre el programa mediante http://localhost:9000
> al primer ingreso, tanto la contraseña como el usuario son "admin" se va a solicitar cambiar la contraseña pronto despues.

## Analisis de un Proyecto
1. Crea un proyecto nuevo, genera los tokens y cuando sea necesario correr el analisis del proyecto, selecionar las opciones correspondientes.
> Para el propósito de este proyecto, escogemos ```Other``` y ```Windows```
> Esto nos va requerir instalar el Sonar Scanner y agregar el directorio ```bin``` al ```%PATH%```

2. Copia y pega el codigo que te otorga la pagina para ejecutar el scanner en la carpeta del proyecto.

3. Una vez terminado el scan, la pagina se va a autorefrescar y mostrar el analisis generado del proyecto.

## Proyecto a Testear
El proyecto que vamos a testear es un proyecto en Maven tomado de este [link](https://github.com/SonarSource/sonar-scanning-examples/tree/master/sonarqube-scanner-maven/maven-basic).

Mas ejemplos se pueden encontrar [aqui](https://github.com/SonarSource/sonar-scanning-examples).
