export class Friend {
    private name: string;
    private lastName: string;
    readonly birthday: string;
    private email: string;
    constructor(name: string, lastName: string, birthday: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
    }
    
    public hasBirthdayToday() {
        const currentDate = new Date();
        return this.isSameMonth(this.birthday, currentDate) && this.isSameDate(currentDate);
    }
    
    private isSameDate(currentDate: Date) {
        return new Date(this.birthday).getDate() === currentDate.getDate();
    }
    
    private isSameMonth(birthday: string, currentDate: Date) {
        return new Date(birthday).getMonth() === currentDate.getMonth()
    }
}