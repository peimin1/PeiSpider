#### python魔法方法

**概念**

以双下划线开头的变量名基本上都是python的魔法方法， 比如"__init__","___new__\"

##### 1. 构造和初始化

```python
# __init__	 __new__	__new 
from os.path import join 
class FileObject: 
    '''给文件对象进行包装从而确认在删除时文件流关闭'''
    def __init__(self, filepath='~', filename='sample.txt'): 
        #读写模式打开一个文件 
        self.file = open(join(filepath, filename), 'r+') 
    def __del__(self): 
        self.file.close() 
        del self.file
```



##### 2. 控制属性访问

```python
# __getattr__ 	__setattr__ 	__delattr__
def __setattr__(self, name, value): 
    self.__dict__[name] = value  # 给类中的属性名分配值 
    # 定制特有属性
```



##### 3. 创建自定义容器

```python
# __len__	__getitem__		__setitem__		__delitem__ 	__iter__
# __reversed__ 	__contains__	__missing__
```



##### 4.反射

```python
# __instancecheck__  	__subclasscheck__
```



##### 5.可调用的对象

```python
# __call__
# -*- coding: UTF-8 -*- 
class Entity: 
    """ 
    调用实体来改变实体的位置 
    """
def __init__(self, size, x, y): 
    self.x, self.y = x, y 
    self.size = size 
def __call__(self, x, y): 
    """ 
    改变实体的位置 
    """
    self.x, self.y = x, y
```



##### 6.上下文管理

```python
# __enter__  __exit__
```



##### 7. 创建对象描述器

```python
# __get__	__set___	__delete__
```



#####8. 复制

```python
# __copy__  __deepcopy__
```

