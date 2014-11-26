/* 
 * File:   newForm.h
 * Author: Егор
 *
 * Created on 26 ноября 2014 г., 15:31
 */

#ifndef _NEWFORM_H
#define	_NEWFORM_H
#include <QApplication>
#include "newForm.h"

class newForm : public QDialog {
    Q_OBJECT
public:
    newForm();
    virtual ~newForm();
private:
    Ui::newForm widget;
};

#endif	/* _NEWFORM_H */
