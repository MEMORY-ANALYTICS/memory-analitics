package school.sptech.BancoDados;

import java.util.List;
import java.util.Objects;

public interface Registravel {
    public void queryInsert();
    public List<Object> querySelect();
    public List<Object> queryProcedureSelect();
    public void queryProcedureInsert();
}
