OOPS : 	
-	Stands for Object-Oriented Programming.
-	The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.


Class :
	- A class is a user defined blueprint or prototype from which objects are created.
	- It represents the set of properties or methods that are common to all objects of one type.
	- Also can say it is collection of data member and member function.


Objects: 
	- Real word Entity, that have set of attributes and function. 
	Example :  PEN || It attributes are > color, size, mattel. Function > use for writing
	
	
Pillars of OOPS:
	1. Encapsulation
	2. Abstraction
	3. Inheritance
	4. Polymorphism
		> Compile-time polymorphism this called "Function overloading"
		> Run-time polymorphism this called "Function overriding"
		

1. Encapsulation : 
		- It is the mechanism that binds data member (attributes) and member function (Functions) into a single unit.
		- Encapsulation can be achieved by Declaring all the variables in the class as private and writing public methods in the class to set and get the values of variables.


2. Abstraction :
		- It is the concept of object-oriented programming that "shows" only essential attributes and "hides" unnecessary information.
		- The main purpose of abstraction is hiding the unnecessary details from the users.
	
		
3. Inheritance :
		- Inheritance supports the concept of "Reusability of code".
		- It is the mechanism by which one class is allow to inherit the features(data member and member function) of another class.
		 
		Super Class / Parent Class: The class whose features are inherited is known as superclass(or a base class or a parent class).
		Sub Class / Child Class: The class that inherits the other class is known as subclass(or a derived class, extended class, or child class).
								 - The subclass can add its own data member and member function in addition to the superclass data member and member function.
		
		Types of Inheritance :
		i.  Single inheritance		 -> 1 parent,1 child
		ii. multiple inheritance	 -> multiple parent,1 child
		iii.multi-level inheritance	 -> 1 parent,1 child but more level
		iv. hierarchical inheritance -> 1 parent , multiple child
		v.  hybrid Inheritance		 -> Diamond structure
		
		** single, multilevel and hierarchical. In java programming, multiple and hybrid inheritance is supported through interface only.
		
			
4.  Polymorphism :
		- same name but different forms or many forms.
		- we make multiple function with same name but different number of parameters, different types of parameters.
		
		Function Overloading:
			Overloading allows different methods to have the same name, but different signatures where the signature can differ by the number of input parameters or type of input parameters or both.
			Overloading is related to compile-time (or static) polymorphism.
		
		Function Overriding:
			 Overriding is a feature that allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its super-classes or parent classes.
			 When a method in a subclass has the same name, same parameters or signature, and same return type(or sub-type) as a method in its super-class, 
			 then the method in the subclass is said to override the method in the super-class.	
		
		> what is solution for overriding problem [do yourself]