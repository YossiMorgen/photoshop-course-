export class ErrorModel{
    public constructor(public message: string, public status: number) {}
}

export class RouteNotFoundErrorModel extends ErrorModel{
    public constructor(route: string) {
        super(`Route ${route} Not Found!!!`, 404)
    }
}

export class ResourceNotFoundErrorModel extends ErrorModel{
    public constructor(public id: any) {
        super(`Resource ${id} dosn't exist`, 404)
    }
}

export class ValidationErrorModel extends ErrorModel{
    public constructor(message: string) {
        super(message, 404)
    }
}

export class ResourceAlreadyExistErrorModel extends ErrorModel{
    public constructor(message: string){
        super(message, 403);
    }
}

export class AuthErrorModel extends ErrorModel{
    public constructor(message: string){
        super(message, 401);
    }
}