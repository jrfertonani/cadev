package Back.domain;

import Back.domain.Enums.Status;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity     @Data
public class Dev extends Pessoas {
    private static final long serialVersionUID = 1L;

    private Status status;

}
