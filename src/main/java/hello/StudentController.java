package hello;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController{
    private ArrayList<Student> students = new ArrayList<Student>();
    {
        students.add(new Student(21, "Mary"));
        students.add(new Student(19, "Peter"));
        students.add(new Student(23, "Lauren"));
        students.add(new Student(24, "Thomac"));
        students.add(new Student(17, "Marianna"));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getStudent(@PathVariable int id) {
        return  students.stream().filter(student ->student.getId() == id).collect(Collectors.toList()).get(0);
    }
    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<Student> getAllStudents() {
        return  students;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ArrayList<Student> deleteStudent(@PathVariable long id) {
        Student student = students.stream().filter(s ->s.getId() == id).collect(Collectors.toList()).get(0);
        students.remove(student);
        return  students;
    }
    @RequestMapping( method = RequestMethod.POST)
    public ArrayList<Student> createStudent(@RequestBody Student student) {
        students.add(student);
        return  students;
    }
}
