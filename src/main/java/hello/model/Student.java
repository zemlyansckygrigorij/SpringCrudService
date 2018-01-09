package hello.model;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student{
    private static long count;


    @Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name = "id", nullable = false, updatable = false)
    private long id;

    @Column(name = "name", nullable = false, unique = false)
    private String name;
    @Column(name = "age", nullable = false, unique = false)
    private long age;
    static{
        count = 1;
    }
/*    public Student(long age, String name) {
        this.id = count;
        this.age = age;
        this.name = name;
        count++;
    }*/

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public long getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setAge(long age) {
        this.age = age;
    }
    public String toString() {
        return name;
    }
}

