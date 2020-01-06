import axios from 'axios';

export default class OutputHelper {
    public static cpf(clearCpf: string): string {
        return clearCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }

    public static phone(clearPhone:string): string {

        if(clearPhone.length == 11){
            return clearPhone.replace(/(\d{2})(\d{5})(\d{4})/g, "(\$1\) \$2\-\$3");
        }else{
            return clearPhone.replace(/(\d{2})(\d{4})(\d{4})/g, "(\$1\) \$2\-\$3");
        }
    }
}