package hello.repository;
import org.springframework.data.repository.CrudRepository;
import hello.model.Student;

import java.util.Collection;

public interface StudentRepository extends CrudRepository<Student, Long> {
        Collection<Student> findAll();



        }
