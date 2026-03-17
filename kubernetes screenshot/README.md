# Kubernetes Deployment (Minikube)

This repository contains the backend and frontend code deployed using Kubernetes (Minikube).

## Deployment

- **Frontend:** Accessible via `minikube service frontend-service`
- **Backend:** Runs inside Kubernetes cluster (service exposed internally)

## Screenshots

### Minikube Start
![Minikube Start](minikube start.PNG)

### Nodes
![Nodes](kubectl nodes.PNG)

### Pods
![Pods](kubectl pods.PNG)

### Services
![Services](kubectl svc.PNG)

### Minikube Service
![Service](minikube service.PNG)

### Application Output
![Output](minikube output.PNG)

### Frontend
![Frontend](frontend-screenshot.PNG)

### Backend
![Backend](backend-screenshot.PNG)

## Project Structure

- backend/
- frontend/
- k8s-manifests/
  - backend-deployment.yaml
  - frontend-deployment.yaml

## Notes

- Backend: Flask app  
- Frontend: Express app  
- Deployment: Kubernetes (Minikube)  